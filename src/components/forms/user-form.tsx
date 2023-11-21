import { FormControl } from './form-control';
import { Input } from './input';
import { Label } from './label';

export const UserForm = () => {
  return (
    <form>
      <FormControl>
        <Label>Name</Label>
        <Input placeholder="Enter name" className="font-medium" />
      </FormControl>
      <FormControl>
        <Label>Email</Label>
        <Input placeholder="Enter email" className="font-medium" />
      </FormControl>
      <FormControl>
        <Label>Role</Label>
        <Input placeholder="Content Manager" className="font-medium" disabled />
      </FormControl>
      <FormControl>
        <button className="rounded-full w-80 bg-green-600 text-white py-3 px-1 text-lg font-semibold">
          Submit
        </button>
      </FormControl>
    </form>
  );
};
