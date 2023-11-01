type Container = {
    children: React.ReactNode
}

export const ContainerComponent = ({ children } : Container) => {
  return <div className="container mx-auto">{children}</div>;
};