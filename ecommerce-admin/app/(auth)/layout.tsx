export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (//ajustando layout de authenticação
      <div className="flex items-center justify-center h-full w-full">
        {children}
      </div>
    );
  };
  