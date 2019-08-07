import React from 'react';

const Collapse = ({ target }) => {
    const tgt = `#${target}`;
    return (
        <div className="accordion" id="accordionExample">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target={tgt} aria-expanded="true" aria-controls={target}>
                            Collapsible Group Item
                        </button>
                    </h2>
                </div>

                <div id={target} className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">
                        Anim pariatur
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collapse;
