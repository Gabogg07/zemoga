import React, {useState} from "react";
import { getPostDetail, getPostList } from "./jsonPlaceHolderService";


const usePostList = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleRequest = () => {
        setLoading(true);
        getPostList()
        .then((data) => {
            console.log(data)
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

    const handleRequest = () => {
        setLoading(true);
        getPostList()
        .then((data) => {
            console.log(data)
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

const useUserData = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleRequest = () => {
        setLoading(true);
        getPostList()
        .then((data) => {
            console.log(data)
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


export { usePostList, usePostComments, useUserData };