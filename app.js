document.addEventListener("DOMContentLoaded", function () {
    const musicListContainer = document.getElementById("music-list-container");
    const footer = document.getElementById("footer");

    const songs = [
        { title: "Egwu", artist: "Chike_Ft_MohBad_-_Egwu", downloadLink: "image/Chike_Ft_MohBad_-_Egwu.mp3", category: "naija" },
        { title: "IDK", artist: "Wizkid-Ft-Zlatan-IDK", downloadLink: "image/Wizkid-Ft-Zlatan-IDK.mp3", category: "naija" },
        { title: "Zlatan-Lagos-Anthem-Money-No-Dey-Lagos", artist: "Zlatan", downloadLink: "image/Zlatan-Lagos-Anthem-Money-No-Dey-Lagos.mp3", category: "naija" },
        { title: "Beast_Peace", artist: "Mohbad", downloadLink: "image/Mohbad_-_Beast_Peace.mp3", category: "naija" },
        { title: "Dj Kentalky - Get Your PVC Mix", artist: "Dj Kentalky", downloadLink: "image/Dj Kentalky - Get Your PVC Mix-(WWW.NaijaDJMix.COM).mp3", category: "mixtapes" },
        { title: "Sorry", artist: "Mohbad", downloadLink: "image/Mohbad_-_Sorry.mp3", category: "naija" },
        { title: "Mohbad_Walking_Dead", artist: "Mohbad", downloadLink: "image/Mohbad_-_Every_Man_Is_A_Walking_Dead.mp3", category: "naija" },
        { title: "Rent-Free", artist: "Gyakie", downloadLink: "image/Gyakie-Rent-Free-(Meritblog9ja).mp3", category: "ghana" },
        { title: "Falz-Ft-Olamide-Davido-Bahd-Baddo-Baddest", artist: "Falz-Ft-Olamide-Davido-Bahd-Baddo-Baddest", downloadLink: "image/Falz-Ft-Olamide-Davido-Bahd-Baddo-Baddest.mp3", category: "naija" },
        { title: "Raye-Escapism-Ft-070-Shake.mp3", artist: "Raye-Escapism-Ft-070-Shake", downloadLink: "image/Raye-Escapism-Ft-070-Shake.mp3", category: "foreign" },
        // Add more song objects as needed
        // ... existing song objects ...
    ];

    


    function renderMusicList(songsToShow) {
        musicListContainer.innerHTML = '';

        songsToShow.forEach((song, index) => {
            const musicItem = document.createElement("article");
            musicItem.classList.add("music-item");

            musicItem.innerHTML = `
                <h2>${song.title}</h2>
                <p class="artist">Artist: ${song.artist}</p>
                <div class="audio-controls">
                    <audio id="audio-${index}" controls>
                        <source src="${song.downloadLink}" type="audio/mp3">
                        Your browser does not support the audio tag.
                    </audio>
                </div>
                <a class="download-link" href="${song.downloadLink}" download>Download</a>
            `;

            musicItem.addEventListener("click", function () {
                playVideo(song);
            });

            musicListContainer.appendChild(musicItem);
        });
    }


    renderMusicList(songs); // Initial rendering

    window.searchMusic = function () {
        const searchInput = document.getElementById("searchInput").value.toLowerCase();
        const categorySelect = document.getElementById("categorySelect");
        const selectedCategory = categorySelect.options[categorySelect.selectedIndex].value.toLowerCase();

        const filteredSongs = songs.filter(song =>
            (selectedCategory === "all" || song.category.toLowerCase() === selectedCategory) &&
            (song.title.toLowerCase().includes(searchInput) ||
                song.artist.toLowerCase().includes(searchInput))
        );

        renderMusicList(filteredSongs);
    };

    window.addEventListener("scroll", function () {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            footer.classList.remove("hidden");
            footer.classList.add("footer-visible");
        } else {
            footer.classList.remove("footer-visible");
            footer.classList.add("hidden");
        }
    });
});
