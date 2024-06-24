

fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const ul = document.getElementById('data-list');
            const h1 = document.getElementById('data-title');
            const h2 = document.getElementById('explore');
            const p1 = document.getElementById('task_desc');

            if (data.tasks[0].assets.length > 0) {
                h1.textContent = data.tasks[0].assets[0].asset_title;
                h2.textContent = data.tasks[0].task_title;
                p1.textContent = data.tasks[0].task_description;
            }
                data.tasks[0].assets.forEach(asset => {
                    const li = document.createElement('li');
                    li.textContent = asset.asset_title;
                    ul.appendChild(li);
                });
                const assetTitles = document.querySelectorAll('.asset_title');
                data.tasks[0].assets.forEach((asset, index) => {
                    if (index < assetTitles.length) {
                        assetTitles[index].textContent = asset.asset_title;
                    }
                });
                const asset_desciptions = document.querySelectorAll('.asset_desc');
                data.tasks[0].assets.forEach((asset, index) => {
                    if (index < asset_desciptions.length) {
                        asset_desciptions[index].textContent = asset.asset_description;
                    }
                });

                const shortdescription = data.description.slice(0,65);
                const shortDesc = document.getElementById("fourSADesc");
                shortDesc.innerHTML = shortdescription;

                const seeMoreButton = document.getElementById("more");


                const fullDescription = data.description.slice(0,135);
                const fullDesc = document.getElementById("fourSADesc");
                seeMoreButton.addEventListener("click", () => {
                    fullDesc.innerHTML = fullDescription;
                }); 

                const shortnextDesc = data.description.slice(136,316)
                const shortnextDescription = document.getElementById("fourSANextDesc");
                shortnextDescription.innerHTML = shortnextDesc;
 

                const seeMoreButton1 = document.getElementById("more1");
                const fullNextDescription = data.description.slice(136,522)
                const fourSANextDesc = document.getElementById("fourSANextDesc");
                seeMoreButton1.addEventListener("click", () => {
                    fourSANextDesc.innerHTML = fullNextDescription;
                }); 


        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });