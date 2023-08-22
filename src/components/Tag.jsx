import { Tag as CTag } from "@chakra-ui/react";

export const Tag = ({ children, ...props }) => {
  return (
    <>
      <CTag p={2} size="sm" h="20px" borderRadius={2} {...props}>
        {children}
      </CTag>
    </>
  );
};
