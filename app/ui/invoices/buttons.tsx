'use client'

import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

import { deleteInvoice } from '@/app/lib/actions';
export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Invoice</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
    href={`/dashboard/invoices/${id}/edit`}
    className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}



  export function DeleteInvoice({ id }: { id: string }) {
    const deleteInvoiceWithId = deleteInvoice.bind(null, id);
    // const [showDialog, setShowDialog] = useState(false);

    // const handleDelete = (event: React.FormEvent) => {
    //   event.preventDefault();
    //   setShowDialog(true);
    // };

    // const confirmDelete = () => {
    //   deleteInvoiceWithId();
    //   setShowDialog(false);
    // };

    // const cancelDelete = () => {
    //   setShowDialog(false);
    // };

    return (
      <>
        {/* {showDialog && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-lg font-medium mb-4">Confirm Delete</h2>
              <p className="text-sm text-gray-600 mb-6">
                Are you sure you want to delete this invoice?
              </p>
              <div className="flex justify-end">
                <button
                  className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                  onClick={cancelDelete}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 ml-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  onClick={confirmDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )} */}

        <form onSubmit={deleteInvoiceWithId}>
          <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
            <span className="sr-only">Delete</span>
            <TrashIcon className="w-4" />
          </button>
        </form>
      </>
    );
  }


