import { IconShoppingCart, IconUser } from "@tabler/icons-react"
import { STORE_NAME } from "../../config"

export const Header = () => {
    return (
        // TODO: Pendiente color de fondo
        <header className="h-10 bg-slate-500 w-full">
            <section className=" mx-auto max-w-6xl items-center flex flex-rows justify-between">
                <h1 className="font-mplus">{STORE_NAME}</h1>
                <section className="flex flex-rows">
                <div>
                    <form action="">
                        <label htmlFor="txtBusqueda">Buscar</label>
                        <input type="text" name="txtBusqueda" id="txtBusqueda" />
                    </form>
                </div>
                <div className="flex flex-rows">
                    <span>
                        <IconUser color="gray" />
                    </span>
                    <span>
                        <IconShoppingCart />
                    </span>
                </div>
                </section>

            </section>
        </header>
    )
}