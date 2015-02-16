//CONSTRUCTORS///////////////////////////////////////////
////////////////////////////////////////////////////////


//player number one //////////////////////////////////


function Character(spec) {
  var spec = spec || {};
  this.name = spec.name || "person";
  this.crew = 30;
  this.wealth = 40;


  this.fail = function (crew) {
    var lose = Math.floor(Math.random() * 6);
    console.log('')
    crew.damage(lose);
}
    this.attack = function (monster) {
      var hits = Math.floor(Math.random() * 6);
      console.log('')
      monster.wounded(hits);
  }

  // this.wealth = function (crew) {
  //     var gain = (this.wealth + 10);
  //     console.log('wealth works')
  //     crew.advance(gain);
  // }


}

//player number two/ working on getting set up //////////////////////////////////

// function Character2(spec) {
//   var spec = spec || {};
//   this.name = spec.name || "person";
//   this.life = 30;
//   this.wealth = 40;
//
//
//   this.attack = function (monster) {
//     var hits = Math.floor(Math.random() * 20);
//     console.log("pew pew");
//     monster.damage(hits);
//   }
//
//
// }



///////the kracken/ monster ///////////////////////////////

function Monster() {
  this.name = "kracken"
  this.life = 100;
  this.wounded = function (hits) {
    if(this.life >= 0) {
    this.life = this.life - hits;
    console.log(this.name + " was hit!!");
  } else {
    console.log(this.name + " HAS DIED, YOU WIN!!!!!");
  }
}

}

///////////// ships crew ///////////////////

function Crew() {
  this.name = "crew"
  this.life = 30;
  this.damage = function (lose) {
    if(this.life >= 0) {
    this.life = this.life - lose;
    console.log(this.name + " has fallen overboard!!");
  } else {
    console.log(this.name + " have all died");
  }
}

 // this.advance = function (gain) {
 //     if(this.wealth >= 0){
 //     this.wealth = this.wealth + gain;
 //     console.log(this.name + "has gained 10 wealth");
 // } else {
 //     console.log(this.name + "has all the wealth");
 // }
 // }

}




var sea = {
  init: function () {
    sea.initEvents();
  },
  initStyling: function () {

  },
  initEvents: function () {
    $("#createGame").on('submit', function (e) {
      e.preventDefault();
      var traits = {
        name: $('#character input[name="name"]').val(),
      };
      sea.character = new Character(traits);
      sea.Crew = new Crew();
      sea.renderBoard();

    });


/////First Scenario---- Character one///////////////////////


    $("#board").click(function(e){
        e.preventDefault();
        $(this).hide();
        $('.choose').hide();
        $('#createGame').hide();
        $('#firstscene').show();
    });


    $("#firstscene").click(function(e){
        e.preventDefault();
        $(this).hide();
        $(".prompt1").show();

    })

    $('.brown').click(function(e){
        e.preventDefault();
        $(".prompt1").hide();
        $(".red").hide();
        $(".pantsbrown").show();

    })

    $('.die').click(function(e){
        e.preventDefault();
        sea.character.fail(sea.Crew);
        $(".prompt1").hide();
        $(".red").hide();
        $(".pantsbrown").hide();
        $(".die").hide();

        $('.status').text(sea.Crew.name + "'s number is now " + sea.Crew.life);
    })

    $('.status').click(function(e){
        e.preventDefault();
        $('.status').hide();
        $('.secondscene').fadeToggle('slow', 'linear');
    })

    $('.red').click(function(e){
        e.preventDefault();
        $('.prompt1').hide();
        $(".brown").hide();
        $('.pantsred').fadeToggle('slow', 'linear');

        // sea.character.wealth(sea.Crew);
        // $('.wealthstatus').text(sea.Character.name + "'s wealth is now" + sea.Character.wealth);


    })


    //////second scenario/////////

    $('.pantsred').click(function(e){
        e.preventDefault();
        $('.pantsred').hide();
        $('.secondscene').fadeToggle('slow', 'linear');

    })

    $('.secondscene').click(function(e){
        e.preventDefault();
        $('.secondscene').hide();
        $('.prompt2').fadeToggle('slow', 'linear');


    })

    $('.A').click(function(e){
        e.preventDefault();
        $('.prompt2').hide();
        $('.A_answer').fadeToggle('slow', 'linear');
        $('.lose').fadeToggle('slow', 'linear');
        $('.startover').fadeToggle('slow', 'linear');
    })

    $('.startover').click(function(e){
        $('.startover').hide();
        $('.lose').hide();
        $('.A_answer').hide();
        $('.choose').show();
        $('#createGame').show();
    })

    $('.B').click(function(e){
        e.preventDefault();
        $('.prompt2').hide();
        $('.B_answer').fadeToggle('slow', 'linear');

    })

    $('.C').click(function(e){
        e.preventDefault();
        $('.prompt2').hide();
        $('.C_answer').fadeToggle('slow', 'linear');
        $('.die2').show();
    })

    $('.die2').click(function(e){
        e.preventDefault();
        sea.character.fail(sea.Crew);
        $('.C_answer').hide();
        $('die2').hide();
        $('.status2').show();

        $('.status2').text(sea.Crew.name + "'s number is now " + sea.Crew.life);
    })


    /////////Third Scenario //////////


    $('.B_answer').click(function(e){
        e.preventDefault();
        $('.B_answer').hide();
        $('.thirdscene').fadeToggle('slow', 'linear');

    })

    $('.status2').click(function(e){
        e.preventDefault();
        $('.status2').hide();
        $('.thirdscene').fadeToggle('slow', 'linear');
    })

    $('.thirdscene').click(function(e){
        e.preventDefault();
        $('.thirdscene').hide();
        $('.prompt3').fadeToggle('slow', 'linear');
    })

    $('.A2').click(function(e){
        e.preventDefault();
        $('.prompt3').hide();
        $('.A2_answer').fadeToggle('slow', 'linear');
        $('.die3').show();
    })

    $('.die3').click(function(e){
        e.preventDefault();
        sea.character.fail(sea.Crew);
        $('.die3').hide();
        $('.A2_answer').hide();
        $('.status3').show();

        $('.status3').text(sea.Crew.name + "'s number is now " + sea.Crew.life);

    })

    $('.B2').click(function(e){
        e.preventDefault();
        $('.prompt3').hide();
        $('.B2_answer').fadeToggle('slow', 'linear');
    })

    $('.C2').click(function(e){
        e.preventDefault();
        $('.prompt3').hide();
        $('.C2_answer').fadeToggle('slow', 'linear');
        $('.lose2').fadeToggle('slow', 'linear');
        $('.startover2').show();
    })

    $('.startover2').click(function(e){
        $('.startover2').hide();
        $('.lose2').hide();
        $('.C2_answer').hide();
        $('.choose').show();
        $('#createGame').show();
    })

/////////fourth scenario ///////////////////////////////////
    $('.B2_answer').click(function(e){
        e.preventDefault();
        $('.B2_answer').hide();
        $('.fourthscene').fadeToggle('slow', 'linear');
    })

    $('.status3').click(function(e){
        e.preventDefault();
        $('.status3').hide();
        $('.fourthscene').fadeToggle('slow', 'linear');
    })

    $('.fourthscene').click(function(e){
        e.preventDefault();
        $('.fourthscene').hide();
        $('.prompt4').fadeToggle('slow', 'linear');
    })

    $('.A3').click(function(e){
        e.preventDefault();
        $('.prompt4').hide();
        $('.A3').hide();
        $('.A3_answer').fadeToggle('slow', 'linear');
    })

    $('.A3_answer').click(function(e){
        e.preventDefault();
        $('.A3_answer').hide();
        $('.A3_answer2').fadeToggle('slow', 'linear');

        sea.character.fail(sea.crew);
      $(".status4").text(sea.monster.name + "'s life is: " + sea.crew.life);
    })

    $('.B3').click(function(e){
        e.preventDefault();
        $('.prompt4').hide();
        $('.B3_answer').fadeToggle('show', 'linear');

    })

    $('.B3_answer').click(function(e){
        e.preventDefault();
        $('.B3_answer').hide();
        $('.B3_answer2').fadeToggle('show', 'linear');
    })

    $('.C3').click(function(e){
        e.preventDefault();
        $('.prompt4').hide();
        $('.C3').hide();
        $('.C3_answer').fadeToggle('show', 'linear');

        sea.character.attack(sea.monster);
      $(".status").text(sea.monster.name + "'s life is: " + sea.monster.life);
    })

    $('.C3_answer').click(function(e){
        e.preventDefault();
        $('.C3_answer').hide();
        $('.C3_answer2').fadeToggle('show', 'linear');
    })


},


  renderBoard: function () {

        $("#board").append(sea.character + "<p>Ahoy, you are going to embark on this voyage as a British Navy ship Captain! You have 30 fine seamen...try and keep them alive</p><button>Continue</button>");
    }




    // $("#board").append("<img class='kracken' src=images/kracken.jpg><button>Attack</button>");




};
























$(document).ready(function () {
  sea.init();
});
