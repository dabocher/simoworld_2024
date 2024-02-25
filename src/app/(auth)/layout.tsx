const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col justify-center bg-white-100">
      {children}
    </div>
  );
};

export default AuthLayout;
