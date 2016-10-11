class ChangellyCtrl {
    constructor($location, Wallet, Alert, Transactions) {
        'ngInject';

        // Alert service
        this._Alert = Alert;
        // $location to redirect
        this._location = $location;
        // Wallet service
        this._Wallet = Wallet;
        // Transactions service
        this._Transactions = Transactions;

        // If no wallet show alert and redirect to home
        if (!this._Wallet.current) {
            this._Alert.noWalletLoaded();
            this._location.path('/');
            return;
        }

        document.getElementById('changwidget').innerHTML = '<iframe width="100%" height="100%" frameborder="0" id="changellyWidget" src="https://changelly.com/widget?to=xem&from=btc&amount=1&ref_id=xemofficial&address='+ this._Wallet.currentAddress + '"/>';

    }

}

export default ChangellyCtrl;
