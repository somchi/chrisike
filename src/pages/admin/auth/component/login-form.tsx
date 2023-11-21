import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { FormControl } from '../../../../components/forms/form-control';
import { Label } from '../../../../components/forms/label';
import { Input } from '../../../../components/forms/input';
import ButtonLoader from '../../../../components/admin-sections/button-loader';
import { auth, signinUser } from '../../../../_libs/apis/auth';
import { Navigate } from 'react-router-dom';

export const LoginForm = () => {
  const [showPass, setshowPass] = useState<boolean>(false);
  const [data, setData] = useState<{ email: string; password: string }>(
    {} as { email: string; password: string }
  );
  const [load, setload] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  // const router = useRouter();

  const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const field = event.target.name;
    const value = event.target.value;
    setData({ ...data, [field]: value });
  };

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setload(true);
    await signinUser(data.email, data.password);

    setload(false);
  };

  const showPassword = () => {
    setshowPass((showPass) => !showPass);
  };

  const handleForgot = () => {
    // router.push(RESET_PASSWORD.href);
  };

  return (
    <>
      {auth.currentUser ? (
        <Navigate to="/admin" />
      ) : (
        <>
          <h3 className="text-theme-danger font-medium">{errorMsg}</h3>
          <div className="grid ">
            <form method="post" onSubmit={handleForm}>
              <FormControl>
                <Label className="font-medium">Email</Label>
                <Input
                  placeholder="Enter email"
                  required
                  name="email"
                  type="email"
                  className="bg-slate-800"
                  onChange={handelChange}
                />
              </FormControl>
              <FormControl>
                <div className="flex justify-between">
                  <Label className="font-medium">Password</Label>
                  <Label
                    onClick={handleForgot}
                    className="text-xs cursor-pointer font-medium text-green-400"
                  >
                    Forgot Password?
                  </Label>
                </div>
                <div className="flex relative bg-gray-gray8 focus-within:text-main-green border-gray-gray7">
                  <Input
                    placeholder="Enter your password"
                    required
                    name="password"
                    type={showPass ? 'text' : 'password'}
                    className="bg-slate-800"
                    onChange={handelChange}
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pl-1">
                    <button
                      type="button"
                      className="pr-4 focus:outline-none focus:shadow-outline"
                      onClick={showPassword}
                    >
                      {showPass ? <Eye size={15} /> : <EyeOff size={15} />}
                    </button>
                  </span>
                </div>
              </FormControl>
              <FormControl className="grid justify-center">
                <button
                  disabled={load}
                  className="rounded-full w-60 bg-green-600 text-white py-3 px-1 text-lg font-semibold"
                >
                  {load && <ButtonLoader />} Sign in
                </button>
              </FormControl>
            </form>
          </div>
        </>
      )}
    </>
  );
};
