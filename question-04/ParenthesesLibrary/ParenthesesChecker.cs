namespace ParenthesesLibrary;

public class ParenthesesChecker
{
    public static bool Check(string code)
    {
        var level = 0;
        var started = false;
        for (int i = 0; i < code.Length; i++)
        {
            if (code[i] == '(')
            {
                if (level == 0 && started)
                {
                    return false;
                }

                level += 1;
                started = true;
            }
            else if (code[i] == ')')
            {
                level -= 1;

                if (level < 0) {
                    return false;
                }
            }
        }

        return level == 0;
    }
}
