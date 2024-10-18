import { IconChevronDown } from "@tabler/icons-react"

export default function Daily() {
    return (
        <section className="flex justify-between items-center px-4 shadow rounded gap-2 hover:text-foreground cursor-pointer text-sm text-slate-500">
        <p>Daily</p>
        <IconChevronDown width={18} />
        </section>
    )
}
    
   