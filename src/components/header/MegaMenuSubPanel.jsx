import { useEffect, useState } from "react";

const MegaMenuSubPanel = ({children}) => {
  
    return (
        <div className="absolute w-full bg-white left-0 top-full py-6 border-t">
            <div className="grid grid-cols-6 gap-2 items-center">
                {children}
            </div>
        </div>
    )
}

export default MegaMenuSubPanel;