'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { FormControl } from '../../../../components/forms/form-control';
import { Label } from '../../../../components/forms/label';
import { Input } from '../../../../components/forms/input';
import ButtonLoader from '../../../../components/admin-sections/button-loader';

export const ResetPasswordForm = () => {
  const [load, setload] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const [showPass, setshowPass] = useState<{
    password: boolean;
    confirmPassword: boolean;
  }>({ password: false, confirmPassword: false });
  const [data, setData] = useState<{
    password: string;
    confirmPassword: string;
  }>({ password: '', confirmPassword: '' });
  // const router = useRouter();

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const showPassword = (field: any) => {
    if (field === 'password') {
      setshowPass({ ...showPass, [field]: !showPass.password });
    } else {
      setshowPass({ ...showPass, [field]: !showPass.confirmPassword });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const feild = e.target.name;
    const value = e.target.value;
    setData({ ...data, [feild]: value });
  };
  return (
    <>
      <h3 className="text-theme-danger font-medium">{errorMsg}</h3>
      <div className="grid">
        <form onSubmit={handleForm}>
          <FormControl>
            <Label className="font-medium">Email</Label>
            <Input
              required
              name="email"
              type="email"
              placeholder="Enter your email"
              className="bg-slate-800"
            />
          </FormControl>

          <FormControl className="grid justify-center">
            <button className="rounded-full w-60 bg-green-600 text-white py-3 px-1 text-lg font-semibold">
              {load && <ButtonLoader />} Next
            </button>
          </FormControl>
        </form>
      </div>
      <div className="grid">
        <form onSubmit={handleForm}>
          <FormControl>
            <div className="flex justify-between">
              <Label className="font-medium">Create New Password</Label>
            </div>
            <div className="flex relative bg-gray-gray8 focus-within:text-main-green border-gray-gray7">
              <Input
                placeholder="Enter your password"
                required
                name="password"
                type={showPass.password ? 'text' : 'password'}
                onChange={handleChange}
                className="bg-slate-800"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pl-1">
                <button
                  type="button"
                  className="pr-4 focus:outline-none focus:shadow-outline"
                  onClick={() => showPassword('password')}
                >
                  {showPass.password ? <Eye size={15} /> : <EyeOff size={15} />}
                </button>
              </span>
            </div>
          </FormControl>
          <FormControl>
            <div className="flex justify-between">
              <Label className="font-medium">Confirm NewPassword</Label>
            </div>
            <div className="flex relative bg-gray-gray8 focus-within:text-main-green border-gray-gray7">
              <Input
                placeholder="Enter your password"
                required
                name="confirmPassword"
                type={showPass.confirmPassword ? 'text' : 'password'}
                onChange={handleChange}
                className="bg-slate-800"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pl-1">
                <button
                  type="button"
                  className="pr-4 focus:outline-none focus:shadow-outline"
                  onClick={() => showPassword('confirmPassword')}
                >
                  {showPass.confirmPassword ? (
                    <Eye size={15} />
                  ) : (
                    <EyeOff size={15} />
                  )}
                </button>
              </span>
            </div>
          </FormControl>
          <FormControl className="grid justify-center">
            <button className="rounded-full w-60 bg-green-600 text-white py-3 px-1 text-lg font-semibold">
              {load && <ButtonLoader />} Next
            </button>
          </FormControl>
        </form>
      </div>
    </>
  );
};
