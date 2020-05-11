document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);

    const deleteButton = document.querySelector('#delete');
    deleteButton.addEventListener('click',handleDeleteClick);
})

    const handleNewItemFormSubmit = function (event){
        event.preventDefault();

        console.log(event) 

        const albumListItem = createAlbumList(event.target);
        const albumList = document.querySelector('#discs');
        albumList.appendChild(albumListItem);

        event.target.reset();
    }

    const createAlbumList = function(form) {
        const albumListItem = document.createElement('li');
        // albumList.classList.add('album-list');
        

        const artist = document.createElement('h2');
            artist.textContent = form.artist.value;
            albumListItem.appendChild(artist);   

            const album = document.createElement('h3');
            album.textContent = form.album.value;
            albumListItem.appendChild(album); 

        const genre = document.createElement('p');
            genre.textContent = form.category.value;
            albumListItem.appendChild(genre); 
            
            const rating = document.createElement('p');
            rating.textContent = form.rating.value;
            albumListItem.appendChild(rating);
            
            return albumListItem;

    }

    const handleDeleteClick = function (event) {
        const albumList = document.querySelector('#discs');
        albumList.innerHTML = '';
      }
  
