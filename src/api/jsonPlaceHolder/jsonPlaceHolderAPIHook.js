import React, {useState} from "react";
import { getPostComments, getPostList, getUserData} from "./jsonPlaceHolderService";


const usePostList = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleRequest = () => {
        setLoading(true);
        getPostList()
        .then((data) => {
            setData(data.data);
        })
        .catch(() => {
            setError("Something wrong happened to get the post list");
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return [ handleRequest, data, loading, error ];
};

const usePostComments = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleRequest = (postId) => {
        setLoading(true);
        getPostComments(postId)
        .then((data) => {
            setData(data.data);
        })
        .catch(() => {
            setError("Something wrong happened to get the post comments");
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return [ handleRequest, data, loading, error ];
};

const useUserData = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleRequest = (userId) => {
        setLoading(true);
        getUserData(userId)
        .then((data) => {
            setData(data.data);
        })
        .catch(() => {
            setError("Something wrong happened to get the user data");
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return [ handleRequest, data, loading, error ];
};


export { usePostList, usePostComments, useUserData };