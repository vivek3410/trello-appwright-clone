
import { database } from '@/appwrite';
import React from 'react';
export const getTodosGroupedByColumn = async () => {
    const data = await database.listDocuments('651d2271276387c598f8','651d228dea8f748dd7dd')
    console.log(data)
}
