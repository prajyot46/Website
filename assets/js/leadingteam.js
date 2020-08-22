
var leadingTeam = new Vue({
    el: "#leadingTeamContainer",
    data: {
        leadingTeam: [
            {
                image: "assets/img/team/Vaibhav Hebbal.webp",
                name: "Vaibhav Hebbal",
                portfolio: "Team Captain"
            },
            {
                image: "assets/img/team/shreyasjsanil.webp",
                name: "Shreyas J anil",
                portfolio: "Vice Captain"
            },
            {
                image: "assets/img/team/Prakash S Bhat.webp",
                name: "Prakash S Bhat",
                portfolio: "Project Manager"
            },
            {
                image: "assets/img/team/Sushanth.webp",
                name: "Shushant S Joshi",
                portfolio: "Project Manager"
            },
            {
                image: "assets/img/team/bharadwaj_car.png",
                name: "Bharadwaj",
                portfolio: "Electrical Head and ESO"
            },
            {
                image: "assets/img/team/pavansantosh.webp",
                name: "Pavan Santhosh",
                portfolio: "Electrical Head and ESO"
            },
            {
                image: "assets/img/team/Kartik Sharma.webp",
                name: "Karthik Sharma",
                portfolio: "Mechanical Head"
            },
            {
                image: "assets/img/team/roopak.webp",
                name: "Roopak N",
                portfolio: "Finance Head"
            },
        ]
    }
})

for (person in leadingTeam) {
    var template = `< div class="col-lg-3 col-md-4 col-sm-6 mb-4" >
    <div class="p-4">
        <div class="avatar w-100 white d-flex justify-content-center align-items-center">
            <img src="{leadingTeam[person].image}" class="img-fluid rounded-circle z-depth-1" />
        </div>
        <div class="text-center mt-3">
            <h6 class="font-weight-bold pt-2">{leadingTeam[person].name}</h6>
            <p class="text-muted">
                <small><i>{leadingTeam[person].portfolio}</i></small>
            </p>
        </div>
    </div>
</div >`
    console.log(template)
}

