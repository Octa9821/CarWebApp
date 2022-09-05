
var carViewModel = function (make, power, convertible) {
    var CarViewModel = {};
    CarViewModel.Make = ko.observable(make);
    CarViewModel.Power = ko.observable(power);
    CarViewModel.Convertible = ko.observable(convertible);
    CarViewModel.Stats = ko.computed(function () {
        if (CarViewModel.Convertible()) {
            return CarViewModel.Make() + ', ' + CarViewModel.Power() + 'hp, convertible';
        }
        else {
            return CarViewModel.Make() + ', ' + CarViewModel.Power() + 'hp';

        }
    });

    CarViewModel.doSubmit = function () {
        var submitData = {
            Make: CarViewModel.Make(),
            Power: CarViewModel.Power(),
            Convertible: CarViewModel.Convertible()
        };
        $.post('@Url.Action("SaveCar")', submitData);
    };

    return CarViewModel;
}

// add ko.applyBindings(new carViewModel()) individually