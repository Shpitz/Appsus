export default {
    template: `
    <section class="note-filter">
        <button v-show="!searchMode" @click="setSearchMode">
        <i class="fas fa-search"></i>
        </button>
        <div v-show="searchMode">
            <input type="text" v-model="filterBy.txt" placeholder="Search" @keyup="search" @click="setFilterBy">
            <button @click="searchImg">
                <i class="fa fa-image"></i>
            </button>
            <button @click="searchList">
                    <i class="fa fa-list"></i>
            </button>
            <button @click="clearSearch">Clear Search</button>
        </div>
    </section>
    `,
    data() {
        return {
            filterBy: {
                txt: '',
                img: false,
                list: false
            },
            searchMode: false,
        }
    },
    methods: {
        setSearchMode() {
            this.searchMode = true;
        },
        setFilterBy() {
            this.filterBy = {
                txt: '',
                img: false,
                list: false
            }
        },
        searchImg() {
            this.setFilterBy()
            this.filterBy.img = true;
            // this.setSearchMode()
            this.search()
        },
        searchList() {
            this.setFilterBy()
            this.filterBy.list = true;
            // this.setSearchMode()
            this.search()
        },
        clearSearch() {
            this.setFilterBy()
            this.searchMode = false;
            this.search()
        },
        search() {
            this.$emit('filtered', this.filterBy)
        },
    }   
}