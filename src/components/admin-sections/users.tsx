import { Pencil, Trash2 } from 'lucide-react';

export const Users = () => {
  return (
    <div className="w-full p-5 shadow-xl rounded">
      <h2 className="font-bold text-xl">Users</h2>
      <div className="relative mt-4">
        <table className="w-full  border-collapse border border-slate-500 table-fixed">
          <thead className="bg-slate-700">
            <tr className="">
              <th className="border border-slate-600 text-start px-3 py-2">
                Name
              </th>
              <th className="border border-slate-600 text-start px-3 py-2">
                Date added
              </th>
              <th className="border border-slate-600 text-start px-3 py-2">
                Role
              </th>
              <th className="border border-slate-600 text-start px-3 py-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-700 px-3 py-2">
                Christopher Ike
              </td>
              <td className="border border-slate-700 px-3 py-2">
                June 23rd, 2023
              </td>
              <td className="border border-slate-700 px-3 py-2">Admin</td>
              <td className="border border-slate-700 px-3 py-2">
                <div className="flex gap-4">
                  <div className="cursor-pointer">
                    <Pencil size={15} />
                  </div>
                  <div className="cursor-pointer">
                    <Trash2 size={15} />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
