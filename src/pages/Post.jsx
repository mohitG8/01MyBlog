import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-4">
            <Container>
                <div className="w-full mb-6">
                    <h1 className="text-2xl md:text-4xl font-bold">{post.title}</h1>
                </div>
                <div className="w-full flex flex-col md:flex-row justify-center md:justify-between mb-4 relative border rounded-xl p-4 ">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="w-full md:w-auto rounded-xl mb-4 md:mb-0 md:mr-4"
                    />
                    {isAuthor && (
                        <div className="flex justify-center md:absolute md:right-6 md:top-6 md:justify-start">
                            <Link to={`/edit-post/${post.$id}`} className="mr-3">
                                <Button bgColor="bg-green-500">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}



 
