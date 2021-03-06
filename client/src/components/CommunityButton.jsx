import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
const CommunityButton = () => {
    return (
        <Link to="/login">
            <Button className="mr-1" variant="outline-primary">
                Community Board
            </Button>
        </Link>
    );
};

export default CommunityButton;
