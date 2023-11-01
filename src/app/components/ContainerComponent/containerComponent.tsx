type Container = {
    children: React.ReactNode
}

export const ContainerComponent = ({ children } : Container) => {
  return <div className="container">{children}</div>;
};