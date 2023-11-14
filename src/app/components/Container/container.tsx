type Container = {
  children: React.ReactNode
}

export const Container = ({ children }: Container) => {
  return <div className="mx-[100px] max-w-6xl xl:px-24 px-5">{children}</div>
}
