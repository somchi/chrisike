import { Link } from 'react-router-dom';
import { FormFooter } from '../../../../_libs/types';

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
  formFooter?: FormFooter;
};

const AuthWrapper = ({ children, title, description, formFooter }: Props) => {
  return (
    <div className="mt-10 rounded-md p-9 bg-gray-700 h-fit shadow-lg sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="text-xl font-bold leading-7 tracking-tight text-gray-300">
        {title}
      </h2>
      <p className="py-3 text-base font-medium text-gray-300 tracking-wide">
        {description}
      </p>
      {children}
      <p className="mt-6 text-center text-xs text-gray-300">
        {formFooter?.title}{' '}
        {formFooter ? (
          <Link
            to={formFooter?.linkPath}
            className="font-semibold leading-6 text-green-400 hover:text-green-500"
          >
            {formFooter?.action}
          </Link>
        ) : null}
      </p>
    </div>
  );
};

export default AuthWrapper;
