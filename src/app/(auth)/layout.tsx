const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex-center min-h-screen w-full bg-primary-50 bg-cover bg-fixed bg-center  bg-dotted-pattern">
      {children}
    </section>
  );
};

export default AuthLayout;
