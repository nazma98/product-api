import { useCallback, useEffect, useMemo, useState } from 'react';
import http from '../config/http';
import { useMutation, useQuery } from '@tanstack/react-query';

const PRODUCT_QUERY_KEY = 'products';
export default function useProducts() {
    const productQuery = useQuery({
        queryKey: [PRODUCT_QUERY_KEY],
        queryFn: () => fetchProducts(),
    });

    const productCreateMutation = useMutation({
        queryKey: [PRODUCT_QUERY_KEY],
        queryFn: (newProduct) => createProduct(newProduct),
        onSuccess: () => {
            alert('Product created successfully!');
        }, 
        onError: (error) => {
            alert('Failed to create product');
            console.error(error);
        },
    });

    return { productQuery };
}


const fetchProducts = async () => {
    const { data } = await http.get('/api/products');
    return data;
};

const createProduct = async (newProduct) => {
    const { data } = await http.post('/api/products', newProduct);
    return data;
};