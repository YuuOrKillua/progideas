import '../ComponentStyles/ValorantStyle.css';
<link href="https://fonts.cdnfonts.com/css/glacial-indifference-2" rel="stylesheet" />

function Valorant(){
    return(
        <div className='Valorant'>
            <h1 id='Main-Tiltle'>Valorant Show Room</h1>
            <input id='SearchBox' type='text' placeholder='Search your desire skin here'/>
            <div class="Row">
                <div class="Column">
                    <h2 id='Column-Title'>Newest</h2>
                </div>
                <div class="Column">
                    <h2 id='Column-Title'>Hottest</h2>
                </div>
            </div>
        </div>
    );
}

export default Valorant;