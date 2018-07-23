// const dog_api = 'https://dog.ceo/api/'


const selectBreed = document.querySelector("#selectBreed")
const viewDog = document.querySelector("#viewDog")
const breedImage = document.querySelector("#breedImage")




// function getDog() {
const dog_url = `https://dog.ceo/api/breeds/list`
$.ajax({
    url: dog_url,
    dataType: "json",
    success: (data) => {
        console.log(data)

        for (let i = 0; i < data.message.length; i++) {
            // console.log(data.message[i])
            selectBreed.innerHTML += `
            <option value="${data.message[i]}">${data.message[i]}</option>

            `
        }
    },

    error: (error) => {
        console.log("There was an error")
    }


})


// }


viewDog.addEventListener('click', function () {
    const breedName = selectBreed.options[selectBreed.selectedIndex].value
    // console.log(breedName)

    const image_url = `https://dog.ceo/api/breed/${breedName}/images/random`
    $.ajax({
        url: image_url,
        dataType: "json",
        success: (data) => {
            console.log(data)
            document.querySelector("#breedImage").setAttribute("src", `${data.message}`)
            // console.log(breedImage)
        },


        error: (error) => {
            console.log("There was an error")
        }


    })


})
 







