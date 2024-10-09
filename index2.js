const loedButton = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res)=> res.json())
    .then((data)=> displayButton(data.categories))
    .catch((error)=> console.log(error))
}


function categoryButtonClick(categoryButton, category){

    const categoryButtons = document.querySelectorAll('.categoryButton')

    categoryButtons.forEach(categoryBtn => {
        categoryBtn.classList.remove('active-category')
    })

    categoryButton.classList.add('active-category')

    const petContainer = document.getElementById('petContainer')

    petContainer.innerHTML = `<span class="loading loading-bars loading-lg"></span>`

    

        fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
        .then((res)=> res.json())
        .then((data)=> {console.log(data)
setTimeout(() => {
    petContainer.innerHTML= ''
    if (data.data.length==0) {
        petContainer.innerHTML= ` <div class="flex-grow flex justify-center items-center flex-col gap-4 bg-gray-300 p-9">
<img src="no-data 1.png" alt="">
<h3 class="text-lg font-bold">No Information Available</h3>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
its layout. The point of using Lorem Ipsum is that it has a.</p>
</div>`
    }
    else{
  data.data.forEach(petelament => {
        petContainer.innerHTML +=`<div class="flex flex-col border p-9">
        <div><img src="${petelament.image}" class="h-40 w-64" alt=""></div>
        <div>
            <h3 class="text-lg font-bold">${petelament.pet_name}</h3>
           

           <div class="flex gap-1 items-center ">
                                <img class="w-4 h-4" src="breed.png" alt="">
                                <p>Breed:</p>
                                <p>${petelament.breed}</p>
                            </div>

                             <div class="flex gap-1 items-center ">
                                <img class="w-4 h-4" src="birth.png" alt="">
                                <p>Birth:</p>
                                <p>${petelament.date_of_birth}</p>
                            </div>
                            
                             <div class="flex gap-1 items-center ">
                                <img class="w-4 h-4" src="gender.png" alt="">
                                <p>Gender:</p>
                                <p>${petelament.gender}</p>
                            </div>

                            <div class="flex gap-1 items-center ">
                                <img class="w-4 h-4" src="price.png" alt="">
                                <p>Price:</p>
                                <p>${petelament.price}$</p>
                            </div>



         <div class="flex gap-1 items-center ">
                        <img class="w-4 h-4" src="breed.png" alt="">
                        <p>Breed:</p>
                        <p>${petelament.date_of_birth}</p>
                       
                    </div>
        <p>${petelament.breed}</p>
        <p>${petelament.gender}</p>
        <p>${petelament.price}</p>
    
           
        </div>
        <div class="flex gap-2">

            <img onclick="clicks('${petelament.image}')" class="w-8 h-8" src="https://img.icons8.com/?size=24&id=WvU1I6Fwj7jt&format=png" alt="">
             <button onclick="adoptClick()" class="bg-orange-300 py-1 px-5">Adopt</button>
            <button class="bg-orange-300 py-1 px-5">details</button>
        </div>
    </div>`
    }) 
    }

}, 3000);        })
        .catch((error)=> console.log(error))
}

const displayButton = (categories) => {
    const categoryContainer = document.getElementById('categories')
    categories.forEach((item) =>{

        categoryContainer.innerHTML += `<button onclick="categoryButtonClick(this, '${item.category}')" class="categoryButton flex items-center gap-3 py-5 px-16 border rounded-xl">
        <img class="w-16" src="${item.category_icon}" alt="">
        <h3 class="text-3xl font-bold">${item.category}</h3>
    </button>`
    })
   
}

  
 function loeadAALL() {

    const loading = document.getElementById('loading')



    loading.classList.remove('hidden')
    petContainer.innerHTML = `<span class="loading loading-bars loading-lg"></span>`

    fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    .then((res)=> res.json())
    .then((data)=> {console.log(data)
        const petContainer = document.getElementById('petContainer')
       setTimeout(() => {
        petContainer.innerHTML= ''
        
        loading.classList.add('hidden')

        
      data.pets.forEach(petelament => {
        
            petContainer.innerHTML +=`<div class="flex flex-col border p-9">
            <div><img src="${petelament.image}" class="h-40 w-64" alt=""></div>
            <div>
                <h3 class="text-lg font-bold">${petelament.pet_name}</h3>


                        <div class="flex gap-1 items-center ">
                                <img class="w-4 h-4" src="breed.png" alt="">
                                <p>Breed:</p>
                                <p>${petelament.breed}</p>
                            </div>

                             <div class="flex gap-1 items-center ">
                                <img class="w-4 h-4" src="birth.png" alt="">
                                <p>Birth:</p>
                                <p>${petelament.date_of_birth}</p>
                            </div>
                            
                             <div class="flex gap-1 items-center ">
                                <img class="w-4 h-4" src="gender.png" alt="">
                                <p>Gender:</p>
                                <p>${petelament.gender}</p>
                            </div>

                            <div class="flex gap-1 items-center ">
                                <img class="w-4 h-4" src="price.png" alt="">
                                <p>Price:</p>
                                <p>${petelament.price}$</p>
                            </div>

               


               
            </div>
            <div class="flex gap-2">

                <img onclick="clicks('${petelament.image}')" class="w-8 h-8" src="https://img.icons8.com/?size=24&id=WvU1I6Fwj7jt&format=png" alt="">
                <button onclick="adoptClick()" class="bg-orange-300 py-1 px-5">Adopt</button>
                <button onclick="detailsClick('${petelament.petId}')" class="bg-orange-300 py-1 px-5">details</button>
            </div>
        </div>`
        }) 
       }, 3000); 
        
    })
    .catch((error)=> console.log(error))
 }


   
 function sortByPrice() {

    const loading = document.getElementById('loading')



    loading.classList.remove('hidden')
    petContainer.innerHTML = `<span class="loading loading-bars loading-lg"></span>`

    fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    .then((res)=> res.json())
    .then((data)=> {console.log(data)
        const petContainer = document.getElementById('petContainer')
       setTimeout(() => {
        petContainer.innerHTML= ''
        
        loading.classList.add('hidden')

        
      data.pets.sort((a,b) => a.price - b.price).forEach(petelament => {
        
            petContainer.innerHTML +=`<div class="flex flex-col border p-9">
            <div><img src="${petelament.image}" class="h-40 w-64" alt=""></div>
            <div>
                <h3 class="text-lg font-bold">${petelament.pet_name}</h3>

<div class="flex gap-1 items-center ">
                                <img class="w-4 h-4" src="breed.png" alt="">
                                <p>Breed:</p>
                                <p>${petelament.breed}</p>
                            </div>

                             <div class="flex gap-1 items-center ">
                                <img class="w-4 h-4" src="birth.png" alt="">
                                <p>Birth:</p>
                                <p>${petelament.date_of_birth}</p>
                            </div>
                            
                             <div class="flex gap-1 items-center ">
                                <img class="w-4 h-4" src="gender.png" alt="">
                                <p>Gender:</p>
                                <p>${petelament.gender}</p>
                            </div>

                            <div class="flex gap-1 items-center ">
                                <img class="w-4 h-4" src="price.png" alt="">
                                <p>Price:</p>
                                <p>${petelament.price}$</p>
                            </div>
               
            </div>
            <div class="flex gap-2">

                <img onclick="clicks('${petelament.image}')" class="w-8 h-8" src="https://img.icons8.com/?size=24&id=WvU1I6Fwj7jt&format=png" alt="">
                <button onclick="adoptClick()" class="bg-orange-300 py-1 px-5">Adopt</button>
                <button onclick="detailsClick('${petelament.petId}')" class="bg-orange-300 py-1 px-5">details</button>
            </div>
        </div>`
        }) 
       }, 3000); 
        
    })
    .catch((error)=> console.log(error))
 }

 function clicks(URL){
    console.log(URL)
    const likeContainer = document.getElementById('likeContainer')
    likeContainer.innerHTML += `<img class="w-32 h-32 border object-cover rounded-xl" src="${URL}" alt="">`
 }

 function adoptClick(){
    my_modal_1.showModal()
    const secondelament = document.getElementById('second')
    setTimeout(() => {
     my_modal_1.close()   
    }, 3000);
    secondelament.innerHTML='3'
    setTimeout(() => {
        secondelament.innerHTML= '2'
    }, 1000);
    setTimeout(() => {
        secondelament.innerHTML= '1'
    }, 2000);
    setTimeout(() => {
        secondelament.innerHTML= '0'
    }, 3000);
 }

 function detailsClick(id) {
    DetailsModal.showModal()

    const detailsContent = document.getElementById('detailsContent')


    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`).then(data => data.json()).then(data => {


        const petData = data.petData

        console.log(petData);
        


        detailsContent.innerHTML = `            <div class="">
                <div class="">
                    <img class="w-full  object-cover h-48 rounded-lg" src="${petData.image}" alt="">
                </div>
                <div>
                    <h4 class="text-2xl font-bold mt-4 mb-2">${petData.pet_name}</h4>

                    <div class="flex">
                        <div class="grow">
                            <div class="flex gap-1 items-center ">
                                <img class="w-4 h-4" src="breed.png" alt="">
                                <p>Breed:</p>
                                <p>${petData.breed}</p>
                            </div>
                            
                            <div class="flex gap-1 items-center ">
                                <img class="w-4 h-4" src="gender.png" alt="">
                                <p>Gender:</p>
                                <p>${petData.gender}</p>
                            </div>
                            <div class="flex gap-1 items-center ">
                                <img class="w-4 h-4" src="gender.png" alt="">
                                <p>Vaccinated status:</p>
                                <p>${petData.vaccinated_status}</p>
                            </div>
                        </div>
                        <div class="grow">
                            <div class="flex gap-1 items-center ">
                                <img class="w-4 h-4" src="birth.png" alt="">
                                <p>Birth:</p>
                                <p>${petData.date_of_birth}</p>
                            </div>
                            <div class="flex gap-1 items-center ">
                                <img class="w-4 h-4" src="price.png" alt="">
                                <p>Price:</p>
                                <p>${petData.price}$</p>
                            </div>
        
                        </div>
                    </div>
                    

                    <div class="divider"></div>
                    <h4 class="text-lg font-bold ">Details Information</h4>
                    <p>${petData.pet_details}</p>

                        <div class="modal-action justify-center">
                            <form method="dialog">
                              <!-- if there is a button in form, it will close the modal -->
                            <button class="py-2 mb-3 px-32 bg-gray-400 mt-2">Cancel</button>

                            </form>
</div>
                </div>
            </div>`

    }
    )

    
 }

 function viewMore() {
    const categoryButtons = document.querySelectorAll('.categoryButton')

    categoryButtons.forEach((categoryBtn) => {
        categoryBtn.classList.add('active-category')

    })
    loeadAALL()
 }

loeadAALL();
loedButton();