export const clients = [...new Array(10)].map((client, index)=>({
    href: `/images/${index+1}.png`
}))