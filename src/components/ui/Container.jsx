import { cn } from "../../lib/utils";

const Container = ({ as: Tag = "div", className, children, ...props }) => (
  <Tag className={cn("mx-auto w-full max-w-content px-6 lg:px-10", className)} {...props}>
    {children}
  </Tag>
);

export default Container;
