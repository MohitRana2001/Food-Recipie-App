import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";



export default function Home() {

    const { recipeList, loading, setSearchParam, setRecipeList} = useContext(GlobalContext);

    useEffect(() => {
        // Clear the search query and recipe list when Home loads
        setRecipeList([]);
        setSearchParam('');
    }, [setSearchParam, setRecipeList]);

    if(loading) return <div>Loding... Please wait!</div>;

    return (
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
            {recipeList && recipeList.length > 0 ? (recipeList.map((item) => <RecipeItem item={item} />)) : (
                <div>
                    <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
                        Nothing to show. Please type something.
                    </p>
                </div>
            )}
        </div>
    );
}