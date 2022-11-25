import React from 'react';

const DeleteModal = ({text,dismisModal,infoData,action}) => {

    return (
        
            <div>
                <input type="checkbox" id="delete-modal" className="modal-toggle" />

                <div className="modal">

                    <div className="modal-box">

                        <h3 className="font-bold text-lg"> {text} </h3>

                        <div className="modal-action">
                            <label onClick={()=>action(infoData)} htmlFor="delete-modal" className="btn btn-sm btn-error">delete</label>
                            <button onClick={dismisModal} className='btn  btn-sm btn-info'>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default DeleteModal;