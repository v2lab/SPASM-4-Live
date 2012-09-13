var chNumMax=0;


function bang()
{

    if (chNumMax > 0) {

        for (var i = 1; i <= chNumMax; i++) {
            outlet(0,"setnode", i, 0,0,0);
        }

        for (var i = 1; i <= chNumMax; i++) {
           outlet(0,"active", i, 0);
        }
            outlet(0,"resetDone",1);
    }
}

function msg_int(v)
{
    post("Max Channelnumber" + v + "\n");
    chNumMax = v;
    bang();
}