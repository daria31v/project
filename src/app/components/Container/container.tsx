type Container = {
    children: React.ReactNode
}

export const Container = ({ children } : Container) => {
  return <div className="container mx-auto max-w-7xl xl:px-24 px-5">{children}</div>;
};