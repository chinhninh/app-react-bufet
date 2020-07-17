import { TOGGLE_SHOW } from '../../actions/questions/actionTypes';

const paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing  sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.'

const defualtState = {
   data: [ {
        title: '1. Sedeiusmod tempor inccsetetur aliquatraiy?',
        paragraph
    },
    {
        title: '2. Lorem ipsum dolor amet, consect adipisicing elit?',
        paragraph
    },
    {
        title: '3. Tempor inccsetetur aliquatraiy?',
        paragraph
    },
    {
        title: '4. Consectetur adipisicing elit, sed do eiusmod tempor?',
        paragraph
    }],
    toggleShow: false
}

const questionReducer = (state = defualtState, action) => {
    switch (action.type) {
        case TOGGLE_SHOW:
            return {
                ...state,
                toggleShow: !state.toggleShow
            }
        default:
            return state
    }
}

export default questionReducer;