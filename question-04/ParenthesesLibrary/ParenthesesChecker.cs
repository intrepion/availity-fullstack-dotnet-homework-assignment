namespace ParenthesesLibrary;

public class ParenthesesChecker
{
    public static bool Check(string code)
    {
        var level = 0;
        for (int i = 0; i < code.Length; i++)
        {
            if (code[i] == '(')
            {
                level += 1;
            }
            else if (code[i] == ')')
            {
                level -= 1;
            }
        }

        return level == 0;
    }
}
