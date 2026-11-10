(() => {

    // función para obtener información de una película por Id
    function getMovieById( Id: string ) {
        console.log({ Id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getAllMovieCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorById( Id: string ) {
        console.log({ Id });
    }
    
    // Crear una película
    interface Movie {                    
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }

    function movie({ title, description, rating, cast }: Movie ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActorIf( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    


})();