const VArticle = {
    name: 'Header',
    data() {
        return {}
    },
    methods: {
        updateTitle() {
            this.$emit('my-update-title', 'Nouveau Titre')
        }
    },
    template: `
        <div>
            <button @click="updateTitle">Mettre à jour</button>
            <form action="" v-on:submit.prevent="addMovie">
                <div class="form-group">
                    <label for="title">Titre</label>
                    <input type="text" name="title" id="title" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="description" class="form-label">Description</label>
                    <input type="text" name="description" id="description" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="year">Annee de sortie</label>
                    <input type="number" name="year" id="year" class="form-control" />
                </div>
                <input class="btn btn-dark" type="submit" value="Valider">
            </form>
            <table class="table table-striped table-hover">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Titre</th>
                        <th scope="col">Description</th>
                        <th scope="col">Année de sortie</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(movie, index) of movies">
                        <th scope="row">{{index + 1}}</th>
                        <td>{{movie.title}}</td>
                        <td>{{movie.description}}</td>
                        <td>{{movie.year}}</td>
                        <td>
                            <img @click="removeMovie(index)" src="./assets/remove.svg" alt="icone suppression du film" width="32">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
}

export default VArticle;