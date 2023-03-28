import ActivitiesForm from './ActivitiesForm';

export default function Activities() {
    return (
        <div className="container text-center">
            <h1>Please Enter Your Activities Today</h1>
            <div className="row">
                <div className="col-6">
                    <ActivitiesForm />
                </div>

                <div className="col-6">
                    <div className="row">
                        <button className="btn btn-secondary col">Activities 1</button>
                    </div>
                    <div className="row">
                        <button className="btn btn-secondary col">Activities 2</button>
                    </div>
                    <div className="row">
                        <button className="btn btn-secondary col">Activities 3</button>
                    </div>
                    <div className="row">
                        <button className="btn btn-secondary col">Activities 4</button>
                    </div>
                
                </div>
            </div>

            
        </div>
    )
}