

// document.addEventListener('DOMContentLoaded', function() {
//     const playButtons = document.querySelectorAll('#music-play-btn');
//     let currentAudio = null; // Track the currently playing audio element
  
//     playButtons.forEach(function(button) {
//       button.addEventListener('click', function() {
//         const audioId = this.getAttribute('data-id');
//         const audio = document.getElementById(audioId);
  
//         if (audio.paused) {
//           // Pause the current audio if another one is playing
//           if (currentAudio && currentAudio !== audio) {
//             currentAudio.pause();
//             // Reset play button text if it was playing
//             const currentButton = document.querySelector(`[data-id="${currentAudio.id}"]`);
//             if (currentButton) {
//               currentButton.textContent = 'Play';
//             }
//           }
  
//           // Start playing the clicked audio
//           audio.play();
//           this.textContent = 'Pause';
//           currentAudio = audio; // Update the current audio
//         } else {
//           // Pause the clicked audio
//           audio.pause();
//           this.textContent = 'Play';
//           currentAudio = null; // Reset current audio
//         }
//       });
//     });
//   });
  


document.addEventListener('DOMContentLoaded', function() {
    const playButtons = document.querySelectorAll('#music-play-btn');
    let currentAudio = null; // Track the currently playing audio element
  
    playButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const audioId = this.getAttribute('data-id');
        const audio = document.getElementById(audioId);
        const audioList = this.closest('.audio-list'); // Find the parent .audio-list element
  
        if (audio.paused) {
          // Pause the current audio if another one is playing
          if (currentAudio && currentAudio !== audio) {
            currentAudio.pause();
            // Reset play button text if it was playing
            const currentButton = document.querySelector(`[data-id="${currentAudio.id}"]`);
            if (currentButton) {
              currentButton.textContent = 'Play';
            }
            // Remove rotation class from the previous audio's image
            const currentAudioList = currentButton.closest('.audio-list');
            const currentImage = currentAudioList.querySelector('#audio-list-img');
            currentImage.classList.remove('rotate');
          }
  
          // Start playing the clicked audio
          audio.play();
          this.textContent = 'Pause';
          currentAudio = audio; // Update the current audio
  
          // Apply rotation animation to the image
          const image = audioList.querySelector('#audio-list-img');
          image.classList.add('rotate');
        } else {
          // Pause the clicked audio
          audio.pause();
          this.textContent = 'Play';
          currentAudio = null; // Reset current audio
  
          // Remove rotation class from the image
          const image = audioList.querySelector('#audio-list-img');
          image.classList.remove('rotate');
        }
      });
    });
  });
  









//   document.addEventListener('DOMContentLoaded', function() {
//     const searchInput = document.getElementById('search');
//     const audioLists = document.querySelectorAll('.audio-list');
//     const noResultsMsg = document.getElementById('noResultsMsg');
//     const home = document.getElementsByClassName("home-header");
  
//     // Initial display state of all audio-list items
//     const initialDisplayStates = Array.from(audioLists, function(audioList) {
//       return {
//         element: audioList,
//         display: getComputedStyle(audioList).display // Get current display property
//       };
//     });
  
//     searchInput.addEventListener('input', function() {
//       const searchTerm = this.value.trim().toLowerCase();
  
//       let found = false;
  
//       audioLists.forEach(function(audioList) {
//         const movieTitle = audioList.querySelector('h2').textContent.toLowerCase();
//         const actorName = audioList.querySelector('h3').textContent.toLowerCase();
  
//         if (movieTitle.includes(searchTerm) || actorName.includes(searchTerm)) {
//           audioList.style.display = initialDisplayStates.find(item => item.element === audioList).display; // Show matching item
//           found = true;
//         } else {
//           audioList.style.display = 'none'; // Hide non-matching item
//         }
//       });
  
//       // Show or hide the "No results" message
//       if (found) {
//         noResultsMsg.style.display = 'none';
//       } else {
//         noResultsMsg.style.display = 'block';

//       }
//     });
//   });
  

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const audioLists = document.querySelectorAll('.audio-list');
    const noResultsMsg = document.getElementById('noResultsMsg');
    const homeHeader = document.querySelector('.home-header'); // Assuming .home-header is a single element
  
    // Initial display state of all audio-list items
    const initialDisplayStates = Array.from(audioLists, function(audioList) {
      return {
        element: audioList,
        display: getComputedStyle(audioList).display // Get current display property
      };
    });
  
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.trim().toLowerCase();
  
      let found = false;
  
      audioLists.forEach(function(audioList) {
        const movieTitle = audioList.querySelector('h2').textContent.toLowerCase();
        const actorName = audioList.querySelector('h3').textContent.toLowerCase();
  
        if (movieTitle.includes(searchTerm) || actorName.includes(searchTerm)) {
          audioList.style.display = initialDisplayStates.find(item => item.element === audioList).display; // Show matching item
          found = true;
        } else {
          audioList.style.display = 'none'; // Hide non-matching item
        }
      });
  
      // Show or hide the "No results" message
      if (found) {
        noResultsMsg.style.display = 'none';
        homeHeader.style.marginTop = ''; // Reset margin if results are found
      } else {
        noResultsMsg.style.display = 'block';
        homeHeader.style.marginTop = '-200px'; // Adjust margin if no results are found
      }
    });
  });
  