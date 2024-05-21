import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: (post && post.$id) ? post.$id : "",

            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const[loading,setLoading]=useState(false);

    const submit = async (data) => {
        setLoading(true);
        if (post) {
            
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;
    
            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }
    
            const dbPost = await appwriteService.updatePost(post && post.$id
, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });
    
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;
    
            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                // console.log(userData.$id)
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });
    
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
        setLoading(false);
    };
    
    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);



    
    if(loading) {
        return <div className='flex justify-center items-center py-8'><img className='rounded-3xl' src="data:image/jpeg;base64,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" alt="loading...." /></div>
    }

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full md:w-auto bg-blue-500 text-white p-2 rounded-md">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}
