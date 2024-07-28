export default function CurrentMessage() {
            const day = new Date().getDay();
            if (day >= 1 && day <= 5) {
                return <Workdays />
            }
            return <Weekends />
        }

function Weekends(){
        return <h3>It is a weekend</h3>
}


function Workdays(){
        return <h3>It is a working day</h3>
}

