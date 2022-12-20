import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/section2.css'

export default function Section2(props) {
    let styleobject = { backgroundImage: props.backgImgUrl }
    return (
        <Link
            style={styleobject}
            className="section2" to={props.routeTo}>
            <h2>{props.projectType}</h2>
            <span>View Projects
                <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMSAxbDQgNC00IDQiIHN0cm9rZT0iI0U3ODE2QiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
                    alt="" 
                />
            </span>
        </Link>

    )
}
