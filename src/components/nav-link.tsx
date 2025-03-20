
interface NavLinkProps {
  href?: string
  children: string
}


export function NavLink({ href, children }: NavLinkProps) {
  return (
    <li>
      <a
        href={href}
        className="relative group/item flex items-center px-4 py-2 text-sm rounded-lg font-medium text-neutral-700 hover:text-neutral-900 transition-colors dark:text-white/90 dark:hover:text-white hover:bg-neutral-900/5 dark:hover:bg-white/10 data-[active=true]:bg-neutral-900/5 dark:data-[active=true]:bg-white/10 group-has-[:hover]:data-[active=true]:[&:not(:hover)]:bg-transparent"
      >
        {children}
      </a>
    </li>
  );
}
