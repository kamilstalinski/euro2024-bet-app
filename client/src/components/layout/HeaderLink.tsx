import { Button } from "@/components/ui/button";

interface HeaderLinksProps {
  links: string[];
  labels: string[];
  selectedView: string;
  handleClick: (selectedView: string) => void;
}

export default function HeaderLink({
  links,
  labels,
  selectedView,
  handleClick,
}: HeaderLinksProps) {
  return (
    <>
      {links.map((link, idx) => {
        return (
          <Button
            key={idx}
            variant='link'
            className={`text-white hover:text-[#8E92A6] p-0 border-b-4 border-[#000D40] hover:border-[#8E92A6] ${
              selectedView === link
                ? "text-[#F9BF4B] hover:text-[#F9BF4B] border-b-4 border-[#F9BF4B] hover:border-[#F9BF4B]"
                : ""
            }`}
            onClick={() => handleClick(link)}
          >
            {labels[idx]}
          </Button>
        );
      })}
    </>
  );
}
