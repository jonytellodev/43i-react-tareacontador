const Titulos = ({subtituloNuevo,estadoNuevo}) => {
// aqui va la logica

//operador ternario
//(condicion logica) ? (rama del si) : (rama del else)
return (
    // aqui tambien se puede poner algo de logica
        <section className="text-center">
            {/* aqui iria el maquetado */}
            <h1 className="display-4">Proyecto contador con REACT</h1>
            <h3 className="display-6">{subtituloNuevo}, estado {(estadoNuevo === true)? 'habilitado':'deshabilitado'}</h3>
            <hr />
        </section>
    );
};

export default Titulos;